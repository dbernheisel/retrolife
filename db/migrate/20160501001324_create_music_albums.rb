class CreateMusicAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :music_albums do |t|
      t.references :game, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
