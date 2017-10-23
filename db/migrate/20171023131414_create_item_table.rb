class CreateItemTable < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :content, null: false
      t.integer :emotion, null: false
      t.timestamps null: false
    end
  end
end
