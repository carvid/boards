class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.integer :position
      t.integer :column_id

      t.timestamps
    end
  end
end
