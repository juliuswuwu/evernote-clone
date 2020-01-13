class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id, null: false
      t.integer :notebook_id, null: false
      t.timestamps
    end
    add_index :notes, :title
    add_index :notes, :user_id, unique: true
    add_index :notes, :notebook_id,  unique: true

  end
end
