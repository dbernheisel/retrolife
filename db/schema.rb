# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160501062045) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.date     "founded_on"
    t.date     "disbanded_on"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "company_games", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "game_id"
    t.integer  "role_id"
    t.integer  "platform_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["company_id"], name: "index_company_games_on_company_id", using: :btree
    t.index ["game_id"], name: "index_company_games_on_game_id", using: :btree
    t.index ["platform_id"], name: "index_company_games_on_platform_id", using: :btree
    t.index ["role_id"], name: "index_company_games_on_role_id", using: :btree
  end

  create_table "company_roles", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_company_roles_on_company_id", using: :btree
    t.index ["role_id"], name: "index_company_roles_on_role_id", using: :btree
  end

  create_table "game_files", force: :cascade do |t|
    t.string   "crc"
    t.string   "md5"
    t.string   "sha1"
    t.decimal  "size"
    t.string   "file"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "game_genres", force: :cascade do |t|
    t.integer  "game_id"
    t.integer  "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_game_genres_on_game_id", using: :btree
    t.index ["genre_id"], name: "index_game_genres_on_genre_id", using: :btree
  end

  create_table "games", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "music_albums", force: :cascade do |t|
    t.integer  "game_id"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["game_id"], name: "index_music_albums_on_game_id", using: :btree
  end

  create_table "platforms", force: :cascade do |t|
    t.string   "name"
    t.integer  "company_id"
    t.date     "released_on"
    t.date     "retired_on"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["company_id"], name: "index_platforms_on_company_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "game_id"
    t.text     "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_reviews_on_game_id", using: :btree
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "screenshots", force: :cascade do |t|
    t.integer  "game_id"
    t.text     "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_screenshots_on_game_id", using: :btree
  end

  create_table "tracks", force: :cascade do |t|
    t.integer  "music_album_id"
    t.string   "format"
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["music_album_id"], name: "index_tracks_on_music_album_id", using: :btree
  end

  create_table "videos", force: :cascade do |t|
    t.integer  "game_id"
    t.text     "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_videos_on_game_id", using: :btree
  end

  add_foreign_key "company_games", "companies"
  add_foreign_key "company_games", "games"
  add_foreign_key "company_games", "platforms"
  add_foreign_key "company_games", "roles"
  add_foreign_key "company_roles", "companies"
  add_foreign_key "company_roles", "roles"
  add_foreign_key "game_genres", "games"
  add_foreign_key "game_genres", "genres"
  add_foreign_key "music_albums", "games"
  add_foreign_key "platforms", "companies"
  add_foreign_key "reviews", "games"
  add_foreign_key "screenshots", "games"
  add_foreign_key "tracks", "music_albums"
  add_foreign_key "videos", "games"
end
