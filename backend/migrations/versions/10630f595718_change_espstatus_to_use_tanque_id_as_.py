"""Change ESPStatus to use tanque_id as primary key

Revision ID: 10630f595718
Revises: b653ff540e40
Create Date: 2024-07-08 02:07:56.021179

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '10630f595718'
down_revision = 'b653ff540e40'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('esp_status', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tanque_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key('fk_espstatus_tanque', 'tanque', ['tanque_id'], ['id'])
        batch_op.drop_column('id')
        batch_op.create_primary_key('pk_espstatus', ['tanque_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('esp_status', schema=None) as batch_op:
        batch_op.drop_constraint('pk_espstatus', type_='primary')
        batch_op.add_column(sa.Column('id', sa.Integer(), nullable=False))
        batch_op.drop_constraint('fk_espstatus_tanque', type_='foreignkey')
        batch_op.drop_column('tanque_id')
        batch_op.create_primary_key('pk_espstatus', ['id'])
    # ### end Alembic commands ###
