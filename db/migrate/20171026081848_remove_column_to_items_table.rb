class RemoveColumnToItemsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :emotion, :string
  end
end
