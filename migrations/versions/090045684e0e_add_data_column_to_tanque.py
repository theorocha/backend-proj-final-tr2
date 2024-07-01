"""Add data column to Tanque

Revision ID: 090045684e0e
Revises: 
Create Date: 2024-07-01 15:11:47.429620

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '090045684e0e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tanque',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data', sa.DateTime(), nullable=False),
    sa.Column('latitude_loc', sa.Float(), nullable=False),
    sa.Column('longitude_loc', sa.Float(), nullable=False),
    sa.Column('capacidade_max', sa.Float(), nullable=False),
    sa.Column('medida_atual', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id', 'data')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tanque')
    # ### end Alembic commands ###