{
  "metadata": {
    "name": "concepts",
    "language_info": {
      "name": "JavaScipt",
      "version": "8.0"
    }
  },
  "jsnbversion": "v0.1",
  "cells": [
    {
      "code": "const order = { id: 1024, status: \"shipped\", items: 3 };\n\nmatch (order) {\n  { status: \"pending\" } => console.log(\"Your order is being processed.\"),\n  { status: \"shipped\" } => console.log(\"Your order has been shipped.\"),\n  { status: \"delivered\" } => console.log(\"Your order has been delivered.\"),\n  { status } => console.log(`Order status: ${status}`),\n  _ => console.log(\"Unknown order status\"),\n}",
      "status": "[-]",
      "output": "<p class=\"error\">Unexpected token '{'</p>",
      "type": "code"
    }
  ],
  "source": "https://github.com/gopi-suvanam/scribbler",
  "run_on_load": false
}