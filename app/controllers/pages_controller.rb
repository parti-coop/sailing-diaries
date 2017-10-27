class PagesController < ApplicationController
  def home
  end

  def dashboard
    @item = Item.last
  end

end
