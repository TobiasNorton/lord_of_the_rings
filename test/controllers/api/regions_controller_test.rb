require 'test_helper'

class Api::RegionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_regions_index_url
    assert_response :success
  end

end
