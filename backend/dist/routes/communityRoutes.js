"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const communityController_1 = require("../controllers/communityController");
const router = (0, express_1.Router)();
router.get('/', communityController_1.getCommunityPosts);
router.post('/', communityController_1.addCommunityPost);
router.put('/:id', communityController_1.updateCommunityPost);
router.delete('/:id', communityController_1.deleteCommunityPost);
exports.default = router;
