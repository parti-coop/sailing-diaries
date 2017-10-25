class ChangeEmotionTypeOfItems < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :emotion, :string
  end
end
