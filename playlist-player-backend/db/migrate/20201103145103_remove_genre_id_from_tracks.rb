class RemoveGenreIdFromTracks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tracks, :genre_id, :integer
  end
end
