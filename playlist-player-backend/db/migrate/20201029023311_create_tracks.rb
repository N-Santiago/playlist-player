class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.integer :artist_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
