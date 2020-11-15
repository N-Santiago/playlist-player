require 'pry'
class PlaylistsController < ApplicationController

    def index
        playlists = Playlist.all
        render json: playlists 
    end

    def show
        playlist = Playlist.find_by(id: params[:id])
        render json: playlist
    end 

end 