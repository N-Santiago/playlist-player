class TrackSerializer < ActiveModel::Serializer
    attributes :id, :title, :artist, :genre, :playlist_id, :created_at, :updated_at
    belongs_to :playlist
  end