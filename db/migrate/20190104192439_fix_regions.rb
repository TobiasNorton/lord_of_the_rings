class FixRegions < ActiveRecord::Migration[5.2]
  def change
    remove_column :regions, :characters
    remove_column :characters, :region
    add_reference :characters, :region, foreign_key: true
  end
end
