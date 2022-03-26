import yfinance as yf

msft = yf.Ticker("RELIANCE.NS")

# get stock info
msft.info

# get historical market data
hist = msft.history(period="max")

# show actions (dividends, splits)

msft.financials
hist