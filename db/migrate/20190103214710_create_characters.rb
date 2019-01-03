class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.string :region
      t.integer :birth_year
      t.string :weapon
      t.string :strength

      t.timestamps
    end
  end
end
