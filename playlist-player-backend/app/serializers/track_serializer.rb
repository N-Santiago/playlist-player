class TrackSerializer < ActiveModel::Serializer
    attributes :id, :title, :artist, :genre, :created_at, :updated_at
    # belongs_to :playlist
  end