class CreateColumns < ActiveRecord::Migration[5.1]
  def change
    create_table :columns do |t|
      t.string :title
      t.integer :position
      t.integer :board_id

      t.timestamps
    end
  end
end
