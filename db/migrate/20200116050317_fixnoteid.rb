class Fixnoteid < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :notebook_id, :integer
  end
end
