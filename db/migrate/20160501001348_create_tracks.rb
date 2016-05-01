class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.references :music_album, foreign_key: true
      t.string :format
      t.text :description

      t.timestamps
    end
  end
end
