require "pry"
class TracksController < ApplicationController

    def index
        tracks = Track.all
        render json: tracks
    end 

    def show
        track = Track.find_by(id: params[:id])
        render json: track
    end 

    def create 
        track = Track.new(title: params[:title], artist: params[:artist], genre: params[:genre])
        if track.save
            render json: track
          else
            render json: track, status: 500
        end
    end 

    # private
    
    #     def track_params
    #         params.require(:track).permit(:title, :artist, :genre)
    #     end

end 

