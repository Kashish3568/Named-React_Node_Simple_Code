import resources from '../../../constants/resources';

const {
  CONFIGURATION, CONTROL_ROOM,
  VTS, TEAMS, SUPERVISOR, DOCTOR_MODULE, DIRECTORY,
  MIS, MDM,
} = resources;

const navOptions = {
  [CONFIGURATION.key]: {
    key: CONFIGURATION.key,
    iconName: 'configuration',
    anchorText: 'label.resources.title.CONFIG',
    isMenuVisible: true,
  },
  [MIS.key]: {
    key: MIS.key,
    iconName: 'mis',
    anchorText: 'label.resources.title.MIS',
    isMenuVisible: true,
  },
  [MDM.key]: {
    key: MDM.key,
    iconName: 'mdm',
    anchorText: 'label.resources.title.MDM',
    isMenuVisible: true,
  },
  [CONTROL_ROOM.key]: {
    key: CONTROL_ROOM.key,
    iconName: 'control-room',
    anchorText: 'label.resources.title.CONTROL_ROOM',
    isMenuVisible: true,
  },
  [VTS.key]: {
    key: VTS.key,
    iconName: 'vts',
    anchorText: 'label.resources.title.VTS',
    isMenuVisible: true,
  },
  [TEAMS.key]: {
    key: TEAMS.key,
    iconName: 'jobs',
    anchorText: 'label.resources.title.TEAMS',
    isMenuVisible: true,
  },
  [SUPERVISOR.key]: {
    key: SUPERVISOR.key,
    iconName: 'supervisor',
    anchorText: 'label.resources.title.SUPERVISOR',
    isMenuVisible: true,
  },
  [DOCTOR_MODULE.key]: {
    key: DOCTOR_MODULE.key,
    iconName: 'doctor-module',
    anchorText: 'label.resources.title.DOCTOR_MODULE',
  },
  [DIRECTORY.key]: {
    key: DIRECTORY.key,
    iconName: 'directory',
    anchorText: 'label.resources.title.DIRECTORY',
    isMenuVisible: true,
  },
};


const menuOptions = {
  [CONFIGURATION.PROJECT_CONFIGURATION.key]: {
    key: CONFIGURATION.PROJECT_CONFIGURATION.key,
    anchorText: 'label.resources.title.PROJECT_CONFIGURATION',
    redirect: '/projects',
  },
  [MDM.ROLES_MASTER.key]: {
    key: MDM.ROLES_MASTER.key,
    anchorText: 'label.resources.title.ROLES_MASTER',
    redirect: '/roles',
  },
  [MDM.USER_MASTER.key]: {
    key: MDM.USER_MASTER.key,
    anchorText: 'label.resources.title.USER_MASTER',
    redirect: '/users',
  },
  [MDM.VEHICLE.key]: {
    key: MDM.VEHICLE.key,
    anchorText: 'label.resources.title.VEHICLE',
  },
  [MDM.CLIENT_MASTER.key]: {
    key: MDM.CLIENT_MASTER.key,
    anchorText: 'label.resources.title.CLIENT_MASTER',
    redirect: '/clients',
  },
  [MDM.HOSPITAL_MASTER.key]: {
    key: MDM.HOSPITAL_MASTER.key,
    anchorText: 'label.resources.title.HOSPITAL_MASTER',
    redirect: '/hospitals',
  },
  [MDM.PARKING_BAY_MASTER.key]: {
    key: MDM.PARKING_BAY_MASTER.key,
    anchorText: 'label.resources.title.PARKING_BAY_MASTER',
    redirect: '/parkingBays',
  },
  [MDM.VENDOR_MASTER.key]: {
    key: MDM.VENDOR_MASTER.key,
    anchorText: 'label.resources.title.VENDOR_MASTER',
    redirect: '/vendors',
  },
  [MDM.COMPLAINT.key]: {
    key: MDM.COMPLAINT.key,
    anchorText: 'label.resources.title.COMPLAINT',
  },
  [MDM.EVENT.key]: {
    key: MDM.EVENT.key,
    anchorText: 'label.resources.title.EVENT',
  },
  [MDM.NAMED_CALLER_MASTER.key]: {
    key: MDM.NAMED_CALLER_MASTER.key,
    anchorText: 'label.resources.title.NAMED_CALLER_MASTER',
    redirect: '/namedCallers',
  },
  [MDM.SERVICE_CATEGORY.key]: {
    key: MDM.SERVICE_CATEGORY.key,
    anchorText: 'label.resources.title.SERVICE_CATEGORY',
  },
  [MDM.SERVICE_REQUEST.key]: {
    key: MDM.SERVICE_REQUEST.key,
    anchorText: 'label.resources.title.SERVICE_REQUEST',
  },
  [MDM.OFFICE_LOCATION_MASTER.key]: {
    key: MDM.OFFICE_LOCATION_MASTER.key,
    anchorText: 'label.resources.title.OFFICE_LOCATION_MASTER',
    redirect: '/officeLocations',
  },
  [MDM.STATE_MASTER.key]: {
    key: MDM.STATE_MASTER.key,
    anchorText: 'label.resources.title.STATE_MASTER',
    redirect: '/states',
  },
  [MDM.DIVISION_MANDAL_ZONE_MASTER.key]: {
    key: MDM.DIVISION_MANDAL_ZONE_MASTER.key,
    anchorText: 'label.resources.title.DIVISION_MANDAL_ZONE_MASTER',
    redirect: '/divisions',
  },
  [MDM.DISTRICT_MASTER.key]: {
    key: MDM.DISTRICT_MASTER.key,
    anchorText: 'label.resources.title.DISTRICT_MASTER',
    redirect: '/districts',
  },
  [MDM.TEHSIL_MASTER.key]: {
    key: MDM.TEHSIL_MASTER.key,
    anchorText: 'label.resources.title.TEHSIL_MASTER',
    redirect: '/tehsils',
  },
  [MDM.CITY_VILLAGE_MASTER.key]: {
    key: MDM.CITY_VILLAGE_MASTER.key,
    anchorText: 'label.resources.title.CITY_VILLAGE_MASTER',
    redirect: '/cities',
  },
  [MDM.SHIFT_MASTER.key]: {
    key: MDM.SHIFT_MASTER.key,
    anchorText: 'label.resources.title.SHIFT_MASTER',
    redirect: '/shifts',
  },
  [DIRECTORY.CONTACT_DIRECTORY_MASTER.key]: {
    key: DIRECTORY.CONTACT_DIRECTORY_MASTER.key,
    anchorText: 'label.resources.title.CONTACT_DIRECTORY_MASTER',
    redirect: '/contactsdirectory',
  },
  [MDM.DEVICE.key]: {
    key: MDM.DEVICE.key,
    anchorText: 'label.resources.title.DEVICE',
  },
  [CONTROL_ROOM.ANSWER_CALL.key]: {
    key: CONTROL_ROOM.ANSWER_CALL.key,
    anchorText: 'label.resources.title.ANSWER_CALL',
    redirect: '/answer-call/create-sr',
  },
  [CONTROL_ROOM.ERCP.key]: {
    key: CONTROL_ROOM.ERCP.key,
    anchorText: 'label.resources.title.ERCP',
    redirect: '/ercp/create',
  },
  [TEAMS.DISPATCHING_POLICE.key]: {
    key: TEAMS.DISPATCHING_POLICE.key,
    anchorText: 'label.resources.title.DISPATCHING_POLICE',
    redirect: '/dispatches/pendingPolice?type=POLICE',
  },
  [TEAMS.DISPATCHING_FIRE.key]: {
    key: TEAMS.DISPATCHING_FIRE.key,
    anchorText: 'label.resources.title.DISPATCHING_FIRE',
    redirect: '/dispatches/pendingFire?type=FIRE',
  },
  [TEAMS.DISPATCHING_MEDICAL.key]: {
    key: TEAMS.DISPATCHING_MEDICAL.key,
    anchorText: 'label.resources.title.DISPATCHING_MEDICAL',
    redirect: '/dispatches/pendingMedical?type=MEDICAL',
  },
  [TEAMS.DISPATCHING_AMBULANCE.key]: {
    key: TEAMS.DISPATCHING_AMBULANCE.key,
    anchorText: 'label.resources.title.DISPATCHING_AMBULANCE',
    redirect: '/dispatches/pendingAmbulance?type=AMBULANCE',
  },
  [TEAMS.TASK_CLOSURE_ERCP.key]: {
    key: TEAMS.TASK_CLOSURE_ERCP.key,
    anchorText: 'label.resources.title.TASK_CLOSURE_ERCP',
    redirect: '/taskClosureErcp/openTasks',
  },
  [VTS.VTS_DASHBOARD.key]: {
    key: VTS.VTS_DASHBOARD.key,
    anchorText: 'label.resources.title.VTS_DASHBOARD',
    redirect: '/vts/dashboard',
  },
  [VTS.CLUSTERS.key]: {
    key: VTS.CLUSTERS.key,
    anchorText: 'label.resources.title.CLUSTERS',
    redirect: '/vts/clusters',
  },
  [VTS.ALERT_DASHBOARD.key]: {
    key: VTS.ALERT_DASHBOARD.key,
    anchorText: 'label.resources.title.ALERT_DASHBOARD',
    redirect: '/vts/alertDashboard',
  },
  [VTS.PROTOCOLS.key]: {
    key: VTS.PROTOCOLS.key,
    anchorText: 'label.resources.title.PROTOCOLS',
    redirect: '/vts/protocols',
  },
  [VTS.SERVICE_STATUS.key]: {
    key: VTS.SERVICE_STATUS.key,
    anchorText: 'label.resources.title.SERVICE_STATUS',
    redirect: '/vts/serviceStatus',
  },
  [VTS.NEARBY_ERV.key]: {
    key: VTS.NEARBY_ERV.key,
    anchorText: 'label.resources.title.NEARBY_ERV',
    redirect: '/vts/nearbyErv',
  },
  [VTS.REPORTS.key]: {
    key: VTS.REPORTS.key,
    anchorText: 'label.resources.title.REPORTS',
  },
  [VTS.TRIP_REPLAY.key]: {
    key: VTS.TRIP_REPLAY.key,
    anchorText: 'label.resources.title.TRIP_REPLAY',
    redirect: '/vts/tripReplay',
  },
  [CONTROL_ROOM.OSD.key]: {
    key: CONTROL_ROOM.OSD.key,
    anchorText: 'label.resources.title.OSD',
    redirect: '/osd',
  },
  [CONTROL_ROOM.JOB_CLOSURE.key]: {
    key: CONTROL_ROOM.JOB_CLOSURE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE',
    redirect: '/jobClosure',
  },
  [TEAMS.OSD_REQUESTS.key]: {
    key: TEAMS.OSD_REQUESTS.key,
    anchorText: 'label.resources.title.OSD_REQUESTS',
  },
  [MDM.RULE_EXCEPTIONS_REASON.key]: {
    key: MDM.RULE_EXCEPTIONS_REASON.key,
    anchorText: 'label.resources.title.RULE_EXCEPTIONS_REASON',
    redirect: '/ruleExceptionsReason',
  },
  [MDM.LEAD_REASON_MASTER.key]: {
    key: MDM.RULE_EXCEPTIONS_REASON.key,
    anchorText: 'label.resources.title.LEAD_REASON_MASTER',
    redirect: '/leadsReason',
  },
  [TEAMS.LEADS.key]: {
    key: TEAMS.LEADS.key,
    anchorText: 'label.resources.title.LEADS',
    redirect: '/leads/verified',
  },
  [MDM.RESOLUTION_REASON_MASTER.key]: {
    key: MDM.RESOLUTION_REASON_MASTER.key,
    anchorText: 'label.resources.title.RESOLUTION_REASON_MASTER',
    redirect: '/resolutionReasons',
  },
  [MDM.DEPARTMENT_MASTER.key]: {
    key: MDM.DEPARTMENT_MASTER.key,
    anchorText: 'label.resources.title.DEPARTMENT_MASTER',
    redirect: '/departments',
  },
  [TEAMS.GRIEVANCE_AND_COMPLAINTS.key]: {
    key: TEAMS.GRIEVANCE_AND_COMPLAINTS.key,
    anchorText: 'label.resources.title.GRIEVANCE_AND_COMPLAINTS',
    redirect: '/complaintsAndEnquiries/complaints',
  },
  [TEAMS.FEEDBACK.key]: {
    key: TEAMS.FEEDBACK.key,
    anchorText: 'label.resources.title.FEEDBACK',
    redirect: '/feedback',
  },
  [TEAMS.JOB_CLOSURE_AMBULANCE.key]: {
    key: TEAMS.JOB_CLOSURE_AMBULANCE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_AMBULANCE',
    redirect: '/jobsClosure/pendingAmbulance?type=AMBULANCE',
  },
  [TEAMS.JOB_CLOSURE_FIRE.key]: {
    key: TEAMS.JOB_CLOSURE_FIRE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_FIRE',
    redirect: '/jobsClosure/pendingFire?type=FIRE',
  },
  [TEAMS.JOB_CLOSURE_MEDICAL.key]: {
    key: TEAMS.JOB_CLOSURE_MEDICAL.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_MEDICAL',
    redirect: '/jobsClosure/pendingMedical?type=MEDICAL',
  },
  [TEAMS.JOB_CLOSURE_POLICE.key]: {
    key: TEAMS.JOB_CLOSURE_POLICE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_POLICE',
    redirect: '/jobsClosure/pendingPolice?type=POLICE',
  },
  [SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_FIRE.key]: {
    key: SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_FIRE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_TAT_EXTENSION_FIRE',
    redirect: '/jobsClosure/tatExtensionFire?type=FIRE',
  },
  [SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_POLICE.key]: {
    key: SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_POLICE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_TAT_EXTENSION_POLICE',
    redirect: '/jobsClosure/tatExtensionPolice?type=POLICE',
  },
  [SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_AMBULANCE.key]: {
    key: SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_AMBULANCE.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_TAT_EXTENSION_AMBULANCE',
    redirect: '/jobsClosure/tatExtensionAmbulance?type=AMBULANCE',
  },
  [SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_MEDICAL.key]: {
    key: SUPERVISOR.JOB_CLOSURE_TAT_EXTENSION_MEDICAL.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_TAT_EXTENSION_MEDICAL',
    redirect: '/jobsClosure/tatExtensionMedical?type=MEDICAL',
  },
  [SUPERVISOR.CUSTOM_NOTIFICATION.key]: {
    key: SUPERVISOR.CUSTOM_NOTIFICATION.key,
    anchorText: 'label.resources.title.CUSTOM_NOTIFICATION',
    redirect: '/customNotification',
  },
  [SUPERVISOR.JOB_ST_CORRECTION.key]: {
    key: SUPERVISOR.JOB_ST_CORRECTION.key,
    anchorText: 'label.resources.title.JOB_ST_CORRECTION',
    redirect: '/jobStCorrection',
  },
  [MIS.OPERATIONAL_REPORTS.key]: {
    key: MIS.OPERATIONAL_REPORTS.key,
    anchorText: 'label.resources.title.OPERATIONAL_REPORTS',
  },
  [MIS.PERFORMANCE_REPORTS.key]: {
    key: MIS.PERFORMANCE_REPORTS.key,
    anchorText: 'label.resources.title.PERFORMANCE_REPORTS',
  },
  [MIS.BILLING_PENALTY_REPORTS.key]: {
    key: MIS.BILLING_PENALTY_REPORTS.key,
    anchorText: 'label.resources.title.BILLING_PENALTY_REPORTS',
  },
  [MIS.JOB_ST_CORRECTION_REPORT.key]: {
    key: MIS.JOB_ST_CORRECTION_REPORT.key,
    anchorText: 'label.resources.title.JOB_ST_CORRECTION_REPORT',
    redirect: '/reports/jobTicketCorrection',
  },
};

const subMenuOptions = {
  [MDM.VEHICLE.VEHICLE_MASTER.key]: {
    key: MDM.VEHICLE.VEHICLE_MASTER.key,
    anchorText: 'label.resources.title.VEHICLE_MASTER',
    redirect: '/vehicles',
  },
  [MDM.VEHICLE.VEHICLE_INSURANCE_MASTER.key]: {
    key: MDM.VEHICLE.VEHICLE_INSURANCE_MASTER.key,
    anchorText: 'label.resources.title.VEHICLE_INSURANCE_MASTER',
    redirect: '/vehiclesInsurance',
  },
  [MDM.VEHICLE.VEHICLE_DECLINE_OFFROAD_MASTER.key]: {
    key: MDM.VEHICLE.VEHICLE_DECLINE_OFFROAD_MASTER.key,
    anchorText: 'label.resources.title.VEHICLE_DECLINE_OFFROAD_MASTER',
    redirect: '/vehiclesDeclineOffRoad',
  },
  [MDM.VEHICLE.PUC_FITNESS_CERTIFICATE_MASTER.key]: {
    key: MDM.VEHICLE.PUC_FITNESS_CERTIFICATE_MASTER.key,
    anchorText: 'label.resources.title.PUC_FITNESS_CERTIFICATE_MASTER',
    redirect: '/vehicleCertificates',
  },
  [MDM.VEHICLE.EQUIPMENT_AND_ACCESSORIES_MASTER.key]: {
    key: MDM.VEHICLE.EQUIPMENT_AND_ACCESSORIES_MASTER.key,
    anchorText: 'label.resources.title.EQUIPMENT_AND_ACCESSORIES_MASTER',
    redirect: '/equipmentAccessories',
  },
  [MDM.COMPLAINT.PRIMARY_COMPLAINT_MASTER.key]: {
    key: MDM.COMPLAINT.PRIMARY_COMPLAINT_MASTER.key,
    anchorText: 'label.resources.title.PRIMARY_COMPLAINT_MASTER',
    redirect: '/primaryComplaints',
  },
  [MDM.COMPLAINT.SECONDARY_COMPLAINT_MASTER.key]: {
    key: MDM.COMPLAINT.SECONDARY_COMPLAINT_MASTER.key,
    anchorText: 'label.resources.title.SECONDARY_COMPLAINT_MASTER',
    redirect: '/secondaryComplaints',
  },
  [MDM.EVENT.EVENT_CASUALTY_MASTER.key]: {
    key: MDM.EVENT.EVENT_CASUALTY_MASTER.key,
    anchorText: 'label.resources.title.EVENT_CASUALTY_MASTER',
    redirect: '/eventscasualty',
  },
  [MDM.EVENT.EVENT_ESCALATION_MATRIX_MASTER.key]: {
    key: MDM.EVENT.EVENT_ESCALATION_MATRIX_MASTER.key,
    anchorText: 'label.resources.title.EVENT_ESCALATION_MATRIX_MASTER',
    redirect: '/eventEscalations',
  },
  [MDM.SERVICE_CATEGORY.SERVICE_CATEGORY_MASTER.key]: {
    key: MDM.SERVICE_CATEGORY.SERVICE_CATEGORY_MASTER.key,
    anchorText: 'label.resources.title.SERVICE_CATEGORY_MASTER',
    redirect: '/servicecategories',
  },
  [MDM.SERVICE_CATEGORY.SERVICE_SUB_CATEGORY_MASTER.key]: {
    key: MDM.SERVICE_CATEGORY.SERVICE_SUB_CATEGORY_MASTER.key,
    anchorText: 'label.resources.title.SERVICE_SUB_CATEGORY_MASTER',
    redirect: '/serviceSubCategories',
  },
  [MDM.SERVICE_REQUEST.SERVICE_REQUEST_SOURCE_SUB_SOURCE_MASTER.key]: {
    key: MDM.SERVICE_REQUEST.SERVICE_REQUEST_SOURCE_SUB_SOURCE_MASTER.key,
    anchorText: 'label.resources.title.SERVICE_REQUEST_SOURCE_SUB_SOURCE_MASTER',
    redirect: '/subSources',
  },
  [MDM.SERVICE_REQUEST.SERVICE_REQUEST_RESOLUTION_MASTER.key]: {
    key: MDM.SERVICE_REQUEST.SERVICE_REQUEST_RESOLUTION_MASTER.key,
    anchorText: 'label.resources.title.SERVICE_REQUEST_RESOLUTION_MASTER',
    redirect: '/serviceResolutions',
  },
  [MDM.SERVICE_REQUEST.RESOLUTION_QUEUE_MASTER.key]: {
    key: MDM.SERVICE_REQUEST.RESOLUTION_QUEUE_MASTER.key,
    anchorText: 'label.resources.title.RESOLUTION_QUEUE_MASTER',
    redirect: '/resolutionQueues',
  },
  [MDM.DEVICE.DEVICE_MANUFACTURER_MASTER.key]: {
    key: MDM.DEVICE.DEVICE_MANUFACTURER_MASTER.key,
    anchorText: 'label.resources.title.DEVICE_MANUFACTURER_MASTER',
    redirect: '/deviceManufacturers',
  },
  [MDM.DEVICE.DEVICE_MASTER.key]: {
    key: MDM.DEVICE.DEVICE_MASTER.key,
    anchorText: 'label.resources.title.DEVICE_MASTER',
    redirect: '/devices',
  },
  [TEAMS.OSD_REQUESTS.APPROVAL_REQUESTS.key]: {
    key: TEAMS.OSD_REQUESTS.APPROVAL_REQUESTS.key,
    anchorText: 'label.resources.title.APPROVAL_REQUESTS',
    redirect: '/osdRequests/approvalRequests',
  },
  [TEAMS.OSD_REQUESTS.VEHICLE_FUEL_REQUESTS.key]: {
    key: TEAMS.OSD_REQUESTS.VEHICLE_FUEL_REQUESTS.key,
    anchorText: 'label.resources.title.VEHICLE_FUEL_REQUESTS',
    redirect: '/vehicleFuelRequests/pending',
  },
  [TEAMS.OSD_REQUESTS.VEHICLE_OFFROAD_REQUESTS.key]: {
    key: TEAMS.OSD_REQUESTS.VEHICLE_OFFROAD_REQUESTS.key,
    anchorText: 'label.resources.title.VEHICLE_OFFROAD_REQUESTS',
    redirect: '/vehicleOffRoadRequests/pending',
  },
  [VTS.REPORTS.DISTANCE_REPORT.key]: {
    key: VTS.REPORTS.DISTANCE_REPORT.key,
    anchorText: 'label.resources.title.DISTANCE_REPORT',
    redirect: '/vts/distanceReport',
  },
  [VTS.REPORTS.TRIP_REPORT.key]: {
    key: VTS.REPORTS.TRIP_REPORT.key,
    anchorText: 'label.resources.title.TRIP_REPORT',
    redirect: '/vts/tripReport',
  },
  [VTS.REPORTS.ZHL_TRIP_REPORT.key]: {
    key: VTS.REPORTS.ZHL_TRIP_REPORT.key,
    anchorText: 'label.resources.title.ZHL_TRIP_REPORT',
    redirect: '/vts/zhlTripReport',
  },
  [VTS.REPORTS.GPS_REPORT.key]: {
    key: VTS.REPORTS.GPS_REPORT.key,
    anchorText: 'label.resources.title.GPS_REPORT',
    redirect: '/vts/gpsReport',
  },
  [VTS.REPORTS.TRACKING_ALERTS_REPORT.key]: {
    key: VTS.REPORTS.TRACKING_ALERTS_REPORT.key,
    anchorText: 'label.resources.title.TRACKING_ALERTS_REPORT',
    redirect: '/vts/trackingAlertReport',
  },
  [MIS.OPERATIONAL_REPORTS.SR_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.SR_REPORT.key,
    anchorText: 'label.resources.title.SR_REPORT',
    redirect: '/reports/sr',
  },
  [MIS.OPERATIONAL_REPORTS.JOBS_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.JOBS_REPORT.key,
    anchorText: 'label.resources.title.JOBS_REPORT',
    redirect: '/reports/job',
  },
  [MIS.OPERATIONAL_REPORTS.OSD_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.OSD_REPORT.key,
    anchorText: 'label.resources.title.OSD_FUEL_OFFROAD',
    redirect: '/reports/osd',
  },
  [MIS.OPERATIONAL_REPORTS.COMPLAINTS_ENQUIRY_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.COMPLAINTS_ENQUIRY_REPORT.key,
    anchorText: 'label.resources.title.COMPLAINTS_ENQUIRY_REPORT',
    redirect: '/reports/complaintsEnquiry',
  },
  [MIS.OPERATIONAL_REPORTS.VEHICLE_EVENT_ACTIVITY_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.VEHICLE_EVENT_ACTIVITY_REPORT.key,
    anchorText: 'label.resources.title.VEHICLE_EVENT_ACTIVITY',
    redirect: '/reports/vehicleEventActivity',
  },
  [MIS.OPERATIONAL_REPORTS.LEADS_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.LEADS_REPORT.key,
    anchorText: 'label.resources.title.PRIORITY_CALLS_REPORT',
    redirect: '/reports/leads',
  },

  [MIS.OPERATIONAL_REPORTS.FEEDBACK_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.FEEDBACK_REPORT.key,
    anchorText: 'label.resources.title.FEEDBACK_REPORT',
    redirect: '/reports/feedback',
  },
  [MIS.OPERATIONAL_REPORTS.ERCP_REPORT.key]: {
    key: MIS.OPERATIONAL_REPORTS.ERCP_REPORT.key,
    anchorText: 'label.resources.title.ERCP_REPORT',
    redirect: '/reports/ercp',
  },
  [MIS.PERFORMANCE_REPORTS.GPS_INACTIVITY_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.GPS_INACTIVITY_REPORT.key,
    anchorText: 'label.resources.title.GPS_INACTIVE',
    redirect: '/performances/gpsInactivity',
  },
  [MIS.PERFORMANCE_REPORTS.VEHICLE_MILEAGE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.VEHICLE_MILEAGE_REPORT.key,
    anchorText: 'label.resources.title.VEHICLE_MILEAGE_REPORT',
    redirect: '/performances/vehicleMileage',
  },
  [MIS.PERFORMANCE_REPORTS.CLOSURE_PERFORMANCE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.CLOSURE_PERFORMANCE_REPORT.key,
    anchorText: 'label.resources.title.JOB_CLOSURE_PERFORMANCE',
    redirect: '/performances/closure',
  },
  [MIS.PERFORMANCE_REPORTS.CALL_TAKER_PERFORMANCE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.CALL_TAKER_PERFORMANCE_REPORT.key,
    anchorText: 'label.resources.title.CALL_TAKER_PERFORMANCE_REPORT',
    redirect: '/performances/callTaker',
  },
  [MIS.PERFORMANCE_REPORTS.JOB_COUNT_KM_RUN_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.JOB_COUNT_KM_RUN_REPORT.key,
    anchorText: 'label.resources.title.JOB_COUNT_VS_KMS',
    redirect: '/performances/jobVsKm',
  },
  [MIS.PERFORMANCE_REPORTS.OSD_PERFORMANCE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.OSD_PERFORMANCE_REPORT.key,
    anchorText: 'label.resources.title.OSD_PERFORMANCE',
    redirect: '/performances/osd',
  },
  [MIS.PERFORMANCE_REPORTS.PROCESS_PERFORMANCE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.PROCESS_PERFORMANCE_REPORT.key,
    anchorText: 'label.resources.title.PROCESS_PERFORMANCE_REPORT',
    redirect: '/performances/process',
  },
  [MIS.PERFORMANCE_REPORTS.VEHICLE_WISE_PERFORMANCE_REPORT.key]: {
    key: MIS.PERFORMANCE_REPORTS.VEHICLE_WISE_PERFORMANCE_REPORT.key,
    anchorText: 'label.resources.title.VEHICLE_WISE_PERFORMANCE_REPORT',
    redirect: '/performances/vehicleClOmOh',
  },
  [MIS.BILLING_PENALTY_REPORTS.RESPONSE_TIME_REPORT.key]: {
    key: MIS.BILLING_PENALTY_REPORTS.RESPONSE_TIME_REPORT.key,
    anchorText: 'label.resources.title.RESPONSE_TIME_REPORT',
    redirect: '/billing/responseTime',
  },
  [MIS.BILLING_PENALTY_REPORTS.DISPATCH_TIME_REPORT.key]: {
    key: MIS.BILLING_PENALTY_REPORTS.DISPATCH_TIME_REPORT.key,
    anchorText: 'label.resources.title.DISPATCH_TIME_REPORT',
    redirect: '/billing/dispatchTime',
  },
  [MIS.BILLING_PENALTY_REPORTS.DAILY_OFFROAD_REPORT.key]: {
    key: MIS.BILLING_PENALTY_REPORTS.DAILY_OFFROAD_REPORT.key,
    anchorText: 'label.resources.title.DAILY_OFFROAD_REPORT',
    redirect: '/billing/dailyOffroad',
  },
  [MIS.BILLING_PENALTY_REPORTS['2_5_DAYS_OFFROAD_REPORT'].key]: {
    key: MIS.BILLING_PENALTY_REPORTS['2_5_DAYS_OFFROAD_REPORT'].key,
    anchorText: 'label.resources.title.2_5_DAYS_OFFROAD_REPORT',
    redirect: '/billing/daysOffroad',
  },
  [MIS.BILLING_PENALTY_REPORTS.TRIP_PENALTY_REPORT.key]: {
    key: MIS.BILLING_PENALTY_REPORTS.TRIP_PENALTY_REPORT.key,
    anchorText: 'label.resources.title.TRIP_PENALTY_REPORT',
    redirect: '/billing/tripPenalty',
  },
};


function getSubMenuOptions(options = []) {
  const _options = [];
  options.forEach((option) => {
    if (subMenuOptions[option.code]) {
      const subMenuOption = subMenuOptions[option.code];
      _options.push(subMenuOption);
    }
  });
  return _options;
}

function getMenuOptions(options = []) {
  const _options = [];
  options.forEach((option) => {
    if (menuOptions[option.code]) {
      const menuOption = menuOptions[option.code];
      if (option.childResources && option.childResources.length) {
        menuOption.subMenuItems = getSubMenuOptions(option.childResources);
      }
      _options.push(menuOption);
    }
  });
  return _options;
}
export default function getNavOptions(options) {
  const _options = [];
  options.forEach((option) => {
    if (navOptions[option.code]) {
      const navOption = navOptions[option.code];
      if (navOption.isMenuVisible && option.childResources && option.childResources.length) {
        navOption.menuOptions = getMenuOptions(option.childResources);
      }
      _options.push(navOption);
    }
  });
  return _options;
}
