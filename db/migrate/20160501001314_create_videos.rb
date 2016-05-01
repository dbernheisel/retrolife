class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.references :game, foreign_key: true
      t.text :caption

      t.timestamps
    end
  end
end
