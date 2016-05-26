class Game < ApplicationRecord
  has_many :developer_games
  has_many :platform_games
  has_many :publisher_games
  has_many :game_genres
  has_many :game_files
  has_many :screenshots
  has_many :reviews
  has_many :videos
  has_many :music_albums
  has_many :tracks, through: :music_albums

  def platforms
    platform_games.map(&:platform).compact
  end
end
