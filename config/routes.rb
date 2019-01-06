Rails.application.routes.draw do
  namespace :api do
    get 'characters/index'
  end
  namespace :api do
    get 'regions/index'
  end
  namespace :admin do
    resources :regions
    resources :characters
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.production?
    CLIENT_HTML = File.read(Rails.root.join('public/index.html'))

    get "*path", to: proc { [200, {}, [CLIENT_HTML]] }
  end
end
