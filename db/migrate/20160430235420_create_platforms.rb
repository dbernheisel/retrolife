class CreatePlatforms < ActiveRecord::Migration[5.0]
  def change
    create_table :platforms do |t|
      t.string :name
      t.references :publisher, foreign_key: true
      t.date :released_on
      t.date :retired_on

      t.timestamps
    end
  end
end
