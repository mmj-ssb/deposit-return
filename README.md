# deposit-return

Mock can/bottle deposit machine frontend + backend.

### Assumptions

* Regarding RS-004 it is assumed that each individual deposit does not need to be logged in realtime but a summary when
  a voucher is requested is fine.
* The frontend should simulate the hardware on the recycling machine.
* Interpreted/assumed RS-004 reference to logging is application logging, however in retrospect that might not have been
  what the product owner actually meant.

### No time to implement

* The current implementation of functionality to solve RS-004 should also include functionality to store the log.
