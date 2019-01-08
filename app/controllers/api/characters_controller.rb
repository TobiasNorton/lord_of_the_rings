class Api::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token
   
  def index
    @characters = Character.all

    render json: @characters.map { |character|
      {
        id: character.id,
        name: character.name,
        race: character.race,
        birth_year: character&.birth_year || 'Unknown',
        weapon: character.weapon,
        strength: character.strength,
        region_id: character.region_id,
        region: character.region&.name || 'Unknown'
      }
    }
  end

  def create
    @character = Character.create(character_params)
    render json: @character
  end

  private

  def character_params
    params.require(:character).permit(:name, :race, :region_id, :region, :birth_year, :weapon, :strength)
  end
end
