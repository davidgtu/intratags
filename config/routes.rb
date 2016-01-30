Rails.application.routes.draw do
  scope "api", defaults: {format: :json} do
    resources :tags
  end

  root to: "tags#index", anchor: false
end
