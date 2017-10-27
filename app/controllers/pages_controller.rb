class PagesController < ApplicationController
  def home
  end

  def dashboard
    @item = Item.order('RAND()').first
  end

end
