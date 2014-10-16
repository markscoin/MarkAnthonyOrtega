class HomeController < ApplicationController
  
  
  def index
  end
  
  def download
    send_file "#{Rails.root}/public/Mark_Ortega_Resume.pdf", filename: "Ortega, Mark Resume.pdf", :type => "application/pdf"
  end
end
