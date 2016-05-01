class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.references :game, foreign_key: true
      t.text :text

      t.timestamps
    end
  end
end
