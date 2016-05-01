class CreatePlatformGames < ActiveRecord::Migration[5.0]
  def change
    create_table :platform_games do |t|
      t.references :platform, foreign_key: true
      t.references :game, foreign_key: true
      t.references :publisher, foreign_key: true

      t.timestamps
    end
  end
end
