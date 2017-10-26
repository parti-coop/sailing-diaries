class CreateEmotionTable < ActiveRecord::Migration[5.1]
  def change
    create_table :emotions do |t|
      t.references :item, null: false, index: true
      t.string :title
      t.string :emoji
      t.timestamp null: false
    end
  end
end
