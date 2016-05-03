class CreateGameFiles < ActiveRecord::Migration[5.0]
  def change
    create_table :game_files do |t|
      t.string :crc
      t.string :md5
      t.string :sha1
      t.decimal :size
      t.string :file

      t.timestamps
    end
  end
end
