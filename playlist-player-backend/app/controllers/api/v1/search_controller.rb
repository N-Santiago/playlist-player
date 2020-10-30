class Api::V1::SearchController < ApplicationController

    def index
      spotify_url = "https://api.spotify.com/v1/"
      track = params[:title]
      searchURL = "#{spotify_url}search?q=#{track}&type=track"
    end 

end 