class PagesController < ApplicationController
  def home
  end

  def dashboard
    @item = Item.order('RAND()').first
    @item2 = Item.order('RAND()').where.not(id: @item.id).first
  end

  def refresh_dashboard
  end
end
