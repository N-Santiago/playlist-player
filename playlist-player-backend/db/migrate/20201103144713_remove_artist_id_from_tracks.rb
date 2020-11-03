class RemoveArtistIdFromTracks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tracks, :artist_id, :integer
  end
end
