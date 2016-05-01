class CreatePublisherGames < ActiveRecord::Migration[5.0]
  def change
    create_table :publisher_games do |t|
      t.references :publisher, foreign_key: true
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
