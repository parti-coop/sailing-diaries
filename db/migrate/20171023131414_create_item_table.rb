class CreateItemTable < ActiveRecord::Migration[5.1]
  def change
    create_table :items, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC" do |t|
      t.string :content, null: false
      t.integer :emotion, null: false
      t.timestamps null: false
    end
  end
end
