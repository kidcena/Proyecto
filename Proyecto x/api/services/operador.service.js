'use strict';

var _ = require('lodash');

var operadorRepository = require('../repositories/operador.repository');
var messageHelper = require('../helpers/message.helper');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Error Messages
const GS_SVC_ERR_CREATE_GS_ALREADY_EXISTS_WITH_SAME_NAME = 'Not possible to create gamesystem. There is a gamesystem with the same name in the system';
const GS_SVC_ERR_UPDATE_GS_ALREADY_EXISTS_WITH_SAME_NAME = 'Not possible to update gamesystem. There is a gamesystem with the same name to update in the system';
const GS_SVC_ERR_UPDATE_GS_NOT_FOUND_BY_ID = 'Not possible to update gamesystem. There is NOT a gamesystem with the same id to update'
const GS_SVC_ERR_DELETE_GS_NOT_FOUND_BY_ID = 'Not possible to delete gamesystem. Gamesystem not found';
const GS_SVC_ERR_DELETE_VG_EXISTS_ASSOCIATED = 'Not possible to delete gamesystem. There are videogames associated with the gamesystem';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getOperadores(params) {
  return operadorRepository.getOperadores(params);
}

function getOperadorById(id) {
  return operadorRepository.getOperadorById(id);
}



function createOperador(params) {
  return operadorRepository.createOperador(params);
}


function deleteOperador(id) {

  var result;

  result = operadorRepository.deleteOperador(id);
  
  return result;
}

function updateOperador(params) {
  return operadorRepository.updateOperador(params);
}

module.exports = {
  getOperadores,
  createOperador,
  getOperadorById,
  updateOperador,
  deleteOperador,
  GS_SVC_ERR_CREATE_GS_ALREADY_EXISTS_WITH_SAME_NAME,
  GS_SVC_ERR_UPDATE_GS_ALREADY_EXISTS_WITH_SAME_NAME,
  GS_SVC_ERR_UPDATE_GS_NOT_FOUND_BY_ID,
  GS_SVC_ERR_DELETE_GS_NOT_FOUND_BY_ID,
  GS_SVC_ERR_DELETE_VG_EXISTS_ASSOCIATED
}
