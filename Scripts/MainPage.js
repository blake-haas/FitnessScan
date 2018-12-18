function MainPage(settings){
	var self = this;
	self.Settings = settings;
	self.CardsList = [];
	self.LoadSavedCards = function(){
		try{
			if(window.localStorage.getItem('CardsList2') != "null" && window.localStorage.getItem('CardsList2') != "undefined")
			{
				self.CardsList = JSON.parse(window.localStorage.getItem("CardsList2"));
				if(self.CardsList == null)
				{
					self.CardsList = [];
				}
			}
		}
		catch(ex)
		{
			self.CardsList = [];
		}
	}
	self.AddCardToList = function(name, cardno, gym){
		var card = {name: name, cardno: cardno, gym: gym};
		self.CardsList.push(card);
		self.SaveCards();
	}
	self.RemoveCardFromList = function(index){
		self.CardsList.splice(index, 1);
		self.SaveCards();
	}
	self.SaveCards = function(){
		window.localStorage.setItem("CardsList2", JSON.stringify(self.CardsList));
		window.localStorage.getItem('CardsList2');
	}
	self.GetFooterClass = function(gym){
		switch(gym)
		{
			case "LA FITNESS":
				return "lafitness";
			case "LIFETIME":
				return "lifetime";
			case "OTHER":
				return "other";
			default:
				return "";
		}
	}
}