"""SQL database models for user management"""

import json
import uuid

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Column, ForeignKey
from sqlalchemy.types import (
    Boolean,
    CHAR,
    TypeDecorator,
    DateTime,
    Integer,
    JSON,
    String,
    Unicode,
    )
from sqlalchemy.dialects.postgresql import UUID
from crackq.db import db


class GUID(TypeDecorator):
    """Platform-independent GUID type.
    Uses PostgreSQL's UUID type, otherwise uses
    CHAR(32), storing as stringified hex values.
    """
    impl = CHAR

    def load_dialect_impl(self, dialect):
        if dialect.name == 'postgresql':
            return dialect.type_descriptor(UUID())
        else:
            return dialect.type_descriptor(CHAR(32))

    def process_bind_param(self, value, dialect):
        if value is None:
            return value
        elif dialect.name == 'postgresql':
            return str(value)
        else:
            if not isinstance(value, uuid.UUID):
                return "%.32x" % uuid.UUID(value).int
            else:
                # hexstring
                return "%.32x" % value.int

    def process_result_value(self, value, dialect):
        if value is None:
            return value
        else:
            if not isinstance(value, uuid.UUID):
                value = uuid.UUID(value)
            return value

class User(db.Model):
    """Flask-login User model for session management"""
    __tablename__ = 'user'
    id = Column(GUID(), primary_key=True, default=str(uuid.uuid4()))
    __table_args__ = {'extend_existing': True}
    active = Column(Boolean())
    username = Column(String(255), unique=True)
    email = Column(String(255))
    last_login_at = Column(DateTime())
    last_seen = Column(DateTime())
    current_login_at = Column(DateTime())
    last_login_ip = Column(String(100))
    current_login_ip = Column(String(100))
    login_count = Column(Integer)
    confirmed_at = Column(DateTime())
    job_ids = Column(JSON, unique=True)
    is_admin = Column(Boolean())
    password = Column(Unicode(100))

    def is_active(self):
        """Required method for flask-login User class"""
        return self.active

    def get_id(self):
        """Required method for flask-login User class"""
        return self.id

    def is_anonymous(self):
        """Required method for flask-login User class"""
        return False

    def is_authenticated(self):
        """Required method for flask-login User class"""
        return True

    def __repr__(self):
        """Required method for flask-login User class"""
        ret = {
            'user': self.username,
            'job_ids': self.job_ids,
            'email': self.email,
            'last_seen':  self.last_seen,
            'password': self.password
            }
        return json.dumps(ret)

