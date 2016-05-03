class CreateCompanyGames < ActiveRecord::Migration[5.0]
  def change
    create_table :company_games do |t|
      t.references :company, foreign_key: true
      t.references :game, foreign_key: true
      t.references :role, foreign_key: true
      t.references :platform, foreign_key: true

      t.timestamps
    end
  end
end
