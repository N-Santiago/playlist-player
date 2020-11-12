class PlaylistSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :created_at, :updated_at
    has_many :tracks 
  end