class Api::CharactersController < ApplicationController
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

end
