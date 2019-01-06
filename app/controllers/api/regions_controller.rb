class Api::RegionsController < ApplicationController
  def index
    @regions = Region.all

    render json: @regions.map { |region|
      {
        id: region.id,
        name: region.name
      }
    }
  end
end
