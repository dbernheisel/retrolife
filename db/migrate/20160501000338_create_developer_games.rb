class CreateDeveloperGames < ActiveRecord::Migration[5.0]
  def change
    create_table :developer_games do |t|
      t.references :developer, foreign_key: true
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
